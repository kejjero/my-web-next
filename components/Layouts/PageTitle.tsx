import Head from "next/head";
import {FC} from "react";

type PageTitleProps = {
  title: string;
  description: string;
  keywords?: string;
};

const PageTitle: FC<PageTitleProps> = ({ title, description, keywords }) => {
  const keywordsDefault = 'веб-разработка, frontend, фронтенд, web-интерфейсы, веб-разработчик, разработчик, spa разработка, ssr разработка, web, fullstack разработка, сайт под ключ, фрилансер, фриланс, сайт-портфолио, создать сайт, React, TypeScript'
  return (
    <Head>
      <title>{title}</title>
      <meta name="author" content="Петерс Максим"/>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords ? keywords : keywordsDefault} />
      <meta name="copyright" lang="ru" content="kejero.pw" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="yandex-verification" content="b7bdf3ba5acb6831" />
    </Head>
  );
};

export default PageTitle;
