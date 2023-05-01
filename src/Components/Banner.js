import { BannerText } from './BannerText'

export function Banner () {
  return (
    <>
      <div style={{ backgroundColor: '#000', position: 'relative', overflow: 'hidden' }}>
        <img
          src='/backgroundIMG.jpg'
          style={{
            backgroundColor: '#000',
            objectFit: 'cover',
            top: 0,
            left: 0,
            zIndex: -1,
            width: '100%',
            height: '100vh',
            opacity: 0.65
          }}
        />
        <BannerText />
      </div>
    </>
  )
}
