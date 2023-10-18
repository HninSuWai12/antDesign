
import { Typography } from 'antd'
const Footer = () => {
  return (
    <div className="AppFooter">
    <Typography.Link href="tel:+12345678" target={"_blank"}>
        +12345678
    </Typography.Link>
      <Typography.Link href="https://www.google.com" target={"_blank"}>
        Privacy Policy
      </Typography.Link>
      <Typography.Link href="https://www.google.com" target={"_blank"}>
        Terms of Use
      </Typography.Link>

    </div>
  )
}

export default Footer
