const FormatPrice = ({price}) => {
//  console.log(new Intl.NumberFormat).format(price/100)
//  console.log(typeof price)
return(
<>
  {
  // yahan hum API se wale product ke price ko rupees me convert kar rhe hai
  // yahan hum Intl.NumberFormat() Converter ka use kar rhe hai
  // maximumFractionDigits:2 means .dot ke bad kitne zero hongay
  Intl.NumberFormat("en-IN", {style:"currency", currency:"INR", maximumFractionDigits:2}).format(price/100)
 }
</>
)
}

export default FormatPrice;