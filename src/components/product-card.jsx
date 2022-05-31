import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { getShopifyImage } from "gatsby-source-shopify"
import { formatPrice } from "../utils/format-price"
import {
  productCardStyle,
  productHeadingStyle,
  productImageStyle,
  productDetailsStyle,
  productVendorStyle,
  productPrice,
  productDimensionStyle,
} from "./product-card.module.css"

export function ProductCard({ product, eager }) {
  const {
    title,
    priceRangeV2,
    slug,
    images: [firstImage],

    storefrontImages,

  } = product



console.log(product.id)
  const price = formatPrice(
    priceRangeV2.minVariantPrice.currencyCode,
    priceRangeV2.minVariantPrice.amount
  )

  //TODO: Properly store dimensions in shopify instead of here at render
  function ProductDimensions(product) {
    const dimensions =
      //large box
      product.id === "e9a2d323-7797-55ef-8c31-a24d4a3c3033" || product.id === "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY3Mzc4Njc4OTg5Mzc=" ? "8' × 2' × 22\"" :
      //small box
      product.id === "aef9961e-8b05-59c6-baaf-4f8d576e98b0" ||  product.id === "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY3Mzc4NDUwNTk2NDE=" ? "4' × 2' × 22\"" :
      //condo box
      product.id === "ed24c26b-03b5-5f30-9d49-b93e112c9cd3" ||  product.id === "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY3MzcyNDAzNTg5Njk=" ? "16\" × 32\" × 18\"" :
      //default
      null
    return (dimensions)
  }

  function WateringSystem (product) {
    const systemType =
    //large box
    product.id === "e9a2d323-7797-55ef-8c31-a24d4a3c3033" || product.id === "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY3Mzc4Njc4OTg5Mzc=" ? "14 watering nozzles" :
    //small box
    product.id === "aef9961e-8b05-59c6-baaf-4f8d576e98b0" ||  product.id === "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY3Mzc4NDUwNTk2NDE=" ? "12 watering nozzles" :
    //condo box
    product.id === "ed24c26b-03b5-5f30-9d49-b93e112c9cd3" ||  product.id === "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY3MzcyNDAzNTg5Njk=" ? "watering stakes" :
    //default
    null
    return(systemType)
  }

  const defaultImageHeight = 200
  const defaultImageWidth = 200
  let storefrontImageData = {}
  if (storefrontImages) {
    const storefrontImage = storefrontImages.edges[0].node
    try {
      storefrontImageData = getShopifyImage({
        image: storefrontImage,
        layout: "fixed",
        width: 1000,
        height: 800,
      })
    } catch (e) {
      console.error(e)
    }
  }

  const hasImage = firstImage || Object.getOwnPropertyNames(storefrontImageData || {}).length
  console.log(ProductDimensions(product))
  console.log("PROD #: " + product.id)
  return (
    <Link
      className={productCardStyle}
      to={slug}
      aria-label={`View ${title} product page`}
    >
      <h3 className={productHeadingStyle}>
        {title}
      </h3>


      {ProductDimensions(product) ? <h4 className={productDimensionStyle}>{ProductDimensions(product)}</h4> : "" }
      {hasImage
        ? (
          <div className={productImageStyle} data-name="product-image-box">
            <GatsbyImage
              alt={firstImage?.altText ?? title}
              image={firstImage?.gatsbyImageData ?? storefrontImageData}
              loading={eager ? "eager" : "lazy"}
            />
          </div>
        ) : (
          <div style={{ height: defaultImageHeight, width: defaultImageWidth }} />
        )
      }
      <div className={productDetailsStyle}>

        <div className={productVendorStyle}>{WateringSystem(product)}</div>

        <h4 className={productPrice}>{price}</h4>
      </div>
    </Link>
  )
}

export const query = graphql`
  fragment ProductCard on ShopifyProduct {
    id
    title
    slug: gatsbyPath(
      filePath: "/products/{ShopifyProduct.productType}/{ShopifyProduct.handle}"
    )
    images {
      id
      altText
      gatsbyImageData(aspectRatio: 1, width: 640)
    }
    priceRangeV2 {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    vendor
  }
`
