import {NextPage} from "next";
import { PageTitle, BlogPage } from '../components'

const Home: NextPage = () => {
  const title = 'Петерс Максим - Frontend | Fullstack разработчик';
  const description = 'Создаю креативные веб-интерфейсы с уклоном на производительность и юзабилити.';

  return (
    <>
      <PageTitle title={title} description={description} />
      <BlogPage />
    </>
  );
};

export default Home
