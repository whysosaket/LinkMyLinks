import Loading from '../Components/Loading';
import UserLinks from '../Components/UserLinks/UserLinks';
import AlertContext from '../context/alerts/alertContext';
import { useContext } from 'react';
const User = () => {
  const {loading} = useContext(AlertContext);
  return (
    <>{loading?<Loading />:
    <div className='mb-48 md:mb-36'>
        <UserLinks />
    </div>}
    </>
  )
}

export default User