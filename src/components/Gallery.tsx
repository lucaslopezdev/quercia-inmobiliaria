import 'photoswipe/style.css';
import { useEffect } from 'preact/hooks';

interface Props {
  images: string[]
}

export default function Gallery({ images }: Props) {
  
  useEffect(() => {
    const init = async () => {
        const module = await import("photoswipe/lightbox")
        const PhotoSwipeLightbox = module.default
        const lightbox = new PhotoSwipeLightbox({
          gallery: "#gallery",
          children: "a",
          pswpModule: () => import('photoswipe')

        })
        lightbox.init()
    }
    init()
  }, [])

  return (
    <div id="gallery" class="grid grid-cols-4 grid-rows-2 max-w-7xl mx-auto gap-3" >
      {images.map((image, index) => (
        <a
          href={image}
          data-pswp-width={744}
          data-pswp-height={993}
          data-cropped="true"
          class={`${index === 0 ? 'row-span-2 col-span-2' : ''}  `}
          key={image + '-' + index}
          target="_blank"
          rel="noreferrer"
          style={{ display: index < 5 ? 'inline-block' : 'none' }}
        >
          {index < 5 && <img loading='lazy' src={image} alt="" class="aspect-square object-cover " />}
        </a>
      ))}
    </div>
  );
}