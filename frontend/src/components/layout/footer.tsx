export default function Footer() {
  return (
    <>
      {/* upper footer */}
      <div className="container max-w-7xl m-auto py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b-2 pb-10 ">
        <div className="flex flex-col pl-5">
          <div className="pb-2">
            <img
              src="/assets/images/demos/demo-4/logo.png"
              alt="Picture of the author"
            />
          </div>
          <p className="text-sm text-siteTextColor leading-normal w-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            maiores voluptates modi molestias veniam iste.{" "}
          </p>
        </div>

        <div className="flex flex-col gap-2 pl-5">
          <h1 className="text-sm font-bold">Usefull Links</h1>
          <a className="text-sm text-siteTextColor" href="">
            About Molla
          </a>
          <a className="text-sm text-siteTextColor" href="">
            Our Services
          </a>
          <a className="text-sm text-siteTextColor" href="">
            How to shop on Molla
          </a>
          <a className="text-sm text-siteTextColor" href="">
            FAQ
          </a>
          <a className="text-sm text-siteTextColor" href="">
            Contact US
          </a>
        </div>

        <div className="flex flex-col gap-2 pl-5">
          <h1 className="text-sm font-bold">Usefull Links</h1>
          <a className="text-sm text-siteTextColor" href="">
            About Molla
          </a>
          <a className="text-sm text-siteTextColor" href="">
            Our Services
          </a>
          <a className="text-sm text-siteTextColor" href="">
            How to shop on Molla
          </a>
          <a className="text-sm text-siteTextColor" href="">
            FAQ
          </a>
          <a className="text-sm text-siteTextColor" href="">
            Contact US
          </a>
        </div>

        <div className="flex flex-col gap-2 pl-5">
          <h1 className="text-sm font-bold">Usefull Links</h1>
          <a className="text-sm text-siteTextColor" href="">
            About Molla
          </a>
          <a className="text-sm text-siteTextColor" href="">
            Our Services
          </a>
          <a className="text-sm text-siteTextColor" href="">
            How to shop on Molla
          </a>
          <a className="text-sm text-siteTextColor" href="">
            FAQ
          </a>
          <a className="text-sm text-siteTextColor" href="">
            Contact US
          </a>
        </div>

      </div>
      {/* lower footer */}

      <div className="container max-w-7xl m-auto py-5 grid grid-cols-2 justify-items-center">
        <p className="col-span-2 lg:col-span-1 text-siteTextColor">
          Copyright © 2019 Molla Store. All Rights Reserved.
        </p>
        <img
          className="col-span-2 lg:col-span-1"
          src="/assets/images/payments.png"
          alt=""
        />
      </div>
    </>
  );
}
