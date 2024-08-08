export default function StyledLink({ href, className, ...rest }) {
  return <a href={href} className="w-5" {...rest} />;
}
