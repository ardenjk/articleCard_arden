//import styles from './page.module.css'
import Data from "../app/components/data";
import ArticleCard from "../app/components/ArticleCard";
import Article from "./article";

export default function Home() {
  const projectName = "Exercise Two";

  return (
    <main>
        <h1>{projectName}</h1>
        <ArticleCard title = "Cool Title" description = "Cool description" />
        <ArticleCard title = "Another Title" />
    </main>
  );
}
