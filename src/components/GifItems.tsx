interface Props {
  title: string;
  url: string;
}

export const GifItems = ({ title, url }: Props) => {
  return (
    <div className="card-grid card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
