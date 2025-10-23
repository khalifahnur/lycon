import Landing from "@/components/landing";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        {/* Google Search Console Verification Tag */}
        <meta
          name="google-site-verification"
          content="google3cbf70aa2534b55b.html"
        />
      </Head>
      <Landing />
    </div>
  );
}
