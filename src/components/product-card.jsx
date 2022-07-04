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



// console.log(product.id)
  const price = formatPrice(
    priceRangeV2.minVariantPrice.currencyCode,
    priceRangeV2.minVariantPrice.amount
  )

  //TODO: Properly store dimensions in shopify instead of here at render
  function ProductDimensions(product) {
    const dimensions =
      //large box
      product.id === "f7294e54-2f82-5e9a-af5e-e6471e01fd72" || product.id === "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3NTMzMjg0OTI3MDk=" ? "8' × 2' × 22\"" :
      //medium box
      product.id === "12bdf742-5959-583e-9439-8483c5e25746" ||  product.id === "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc4MTg5NzI5ODc1NTc=" ? "6' × 2' × 22\"" :
      //small box
      product.id === "fbbb09bf-9ffe-5af1-bea7-043eb9bac9d6" ||  product.id === "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3NTMzMzk4MzA0Mzc=" ? "4' × 2' × 22\"" :
      //condo box
      product.id === "60bfb7e8-25b6-572b-8d0d-0b984b4bbfe2" ||  product.id === "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3NTMzMjUxODMxNDE=" ? "16\" × 32\" × 18\"" :
      //default
      null
    return (dimensions)
  }

  function WateringSystem (product) {
    const systemType =
    //large box
    product.id === "f7294e54-2f82-5e9a-af5e-e6471e01fd72" || product.id === "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3NTMzMjg0OTI3MDk=" ? "14 watering nozzles" :
    //medium box
    product.id === "12bdf742-5959-583e-9439-8483c5e25746" ||  product.id === "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc4MTg5NzI5ODc1NTc=" ? "12 watering nozzles" :
    //small box
    product.id === "fbbb09bf-9ffe-5af1-bea7-043eb9bac9d6" ||  product.id === "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3NTMzMzk4MzA0Mzc=" ? "12 watering nozzles" :
    //condo box
    product.id === "60bfb7e8-25b6-572b-8d0d-0b984b4bbfe2" ||  product.id === "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3NTMzMjUxODMxNDE=" ? "watering stakes" :
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
        width: defaultImageWidth,
        height: defaultImageHeight,
      })
    } catch (e) {
      console.error(e)
    }
  }

  const hasImage = firstImage || Object.getOwnPropertyNames(storefrontImageData || {}).length
  // console.log(ProductDimensions(product))
  // console.log("PROD #: " + product.id)
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
