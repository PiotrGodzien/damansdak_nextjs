import useTranslation from 'next-translate/useTranslation';
import Navigation from '../components/_nav';

const Kariera = () => {
  const { t, lang } = useTranslation('common');
  const title = t('title');
  return (
    <>
    <Navigation />
    <div className="mt-40 text-5xl font-bold text-black bg-red-500 ">{title}</div>
    </>
  );
};

export default Kariera;