import { HomeIcon ,BadgeCheckIcon, CollectionIcon,LightningBoltIcon,SearchIcon,UserIcon} from '@heroicons/react/outline';
 import Image from 'next/image';
import Headeritem from './Headeritem';

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto" >
            <div  className="flex flex-grow justify-evenly max-w-2xl">
                <Headeritem title='HOME' Icon={HomeIcon}/>
                <Headeritem title='TRENDING' Icon={LightningBoltIcon}/>
                <Headeritem title='VERIFIED' Icon={BadgeCheckIcon}/>
                <Headeritem title='COLLECTION' Icon={CollectionIcon}/>
                <Headeritem title='SEARCH' Icon={SearchIcon}/>
                <Headeritem title='ACC' Icon={UserIcon}/>
            </div>
            <Image
            className="object-contain cursor-pointer"
            src='https://links.papareact.com/ua6'
            width={200} height={100}
          
            />
        </header>
    )
}

export default Header
