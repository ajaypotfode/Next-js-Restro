import '../../assets/css/admin.css'
import Link from 'next/link'
import Image from 'next/image'
export default function RootLayout({ children }) {
    return (
     <div>
        <nav className="navbar" >
        {/* <nav className="navbar"> */}
        <ul>
          <li>
            <a href="#" className="logo">
              <Image src="/images/logo.png" alt="Example Image" width={70} height={200} />
            </a>
          </li>
          <li> <h1 className="heading">Admin <span>Dashboard</span></h1></li>
          <li><Link href="/" className="btn">Home</Link></li>
        </ul>
      </nav>
      {children}
     </div>
    );
  }