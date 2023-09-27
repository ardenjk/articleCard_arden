import Data from "../app/components/data";
import ArticleCard from "../app/components/ArticleCard";
import styles from "../app/page.module.css";

export default function Home() {
  const projectName = "Exercise Two";

  return (
    <main className={styles.page}>
        <h1>{projectName}</h1>
        {Data.map((article) => (
          <ArticleCard
          key={article.id}
          date={new Date(article.publishedDate).toDateString()}
          description={article.blurb}
          id={article.id}
          imageAlt={article.image.alt}
          imageSrc={"https://images.squarespace-cdn.com/content/v1/607cc34ebab4b20ba47a3b97/b62f442c-a165-4059-b90d-a083097d567a/Old-Money-Aesthetic-Style-Guide-2023?format=2500w"}
          title={article.title}
        />
        ))}
      
      </main>
  );
}
