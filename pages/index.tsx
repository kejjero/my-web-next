import { NextPage } from "next";
import { MainPage, PageTitle } from '../components'

const Home: NextPage = () => {
  const title = 'Петерс Максим - Frontend | Fullstack разработчик';
  const description = 'Создаю креативные веб-интерфейсы с уклоном на производительность и юзабилити.';

  return (
    <>
      <PageTitle title={title} description={description} />
      <MainPage />
    </>
  );
};

export default Home
