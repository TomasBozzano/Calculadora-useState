export function Link({ href, src, alt }) {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank" role="link">
      <img src={src} alt
        ={alt} />
    </a>
    );
}