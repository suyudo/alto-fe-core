import Head from "next/head";

type Props = {
  pageTitle: string;
  appTitle: string;
};

export default function PageHeader(props: Props) {
  return (
    <Head>
      <title>{props.pageTitle} - {props.appTitle}</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Signika+Negative:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
