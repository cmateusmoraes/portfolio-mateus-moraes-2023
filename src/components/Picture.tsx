type ImageProps = {
  imgDesktop: string;
  imgMobile: string;
  alt: string;
  width: number;
  height: number;
  lazy?: string;
};

export default function Picture({
  imgDesktop,
  imgMobile,
  alt,
  width,
  height,
  lazy,
}: ImageProps) {
  return (
    <picture>
      <source media="(min-width: 990px)" srcSet={imgDesktop} />
      <img
        src={imgMobile}
        alt={alt}
        width={width}
        height={height}
        loading={lazy ? 'lazy' : 'eager'}
      />
    </picture>
  );
}
