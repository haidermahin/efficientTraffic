import Loader from '@components/Loader';

const loading = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <Loader />
    </div>
  );
};

export default loading;
