import PhotoGrid from '@/components/PhotoGrid';

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/images/bg.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#0a0a0c',
      }}
      className='min-h-screen text-white'
    >
      <PhotoGrid />
    </div>
  );
}
