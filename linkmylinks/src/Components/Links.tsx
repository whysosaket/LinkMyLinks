import LinkItem from './LinkItem';

const Links = (props: {links: any}) => {
  return (
    <div className='flex flex-col justify-center'>
      <h1 className='font-semibold text-4xl mx-auto md:w-5/6 my-4'>Default List</h1>
        <div className='mx-auto flex flex-wrap md:w-5/6'>
            {props.links.map((link:any, index:number) => (
              <LinkItem key={index} delay={index} link={link} />
            ))}
        </div>
    </div>
  )
}

export default Links