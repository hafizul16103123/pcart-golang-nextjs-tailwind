import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }: { children: any }) {
  return (
    <div>

      {/* <script defer src="/assets/js/flowbite.js"></script> */}
      <script defer src="/assets/js/flowbite.min.js"></script>
      {/* <script defer src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script> */}
      <script defer src="/assets/js/index.js"></script>
      {/* <script defer src="/assets/js/slider.js"></script> */}

      <Header />
      {/* <Navbar /> */}
      <main>{children}</main>
      <Footer />
    </div>
  );
}
