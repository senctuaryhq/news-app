export default function NewsDetailPage({ params }) {
  const newsId = params.id;

  return (
    <>
      <h1>News details page</h1>
      <p>News ID: {newsId}</p>
    </>
  );
}
