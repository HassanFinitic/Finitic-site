import Link from 'next/link'
export const metadata = {
  title: "Page Not Found | Finitic Technologies ",
  description:"Oops! The page you're looking for doesn't exist. Explore our forex and fintech services or return to the homepage for the latest updates and insights.",
  keywords: ["404 error page", "page not found", "forex website error", "fintech page missing", "forex trading platform error"  ],
};
export default function NotFound() {
  return <div>
      <h1>Not found – 404!</h1>
      <div>
        <Link href="/">Go back to Home</Link>
      </div>
  </div>
}