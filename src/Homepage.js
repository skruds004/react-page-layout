
import Header from './Header';
import SearchBar from './SearchBar';
import EmployeeList from './EmployeeList';

export default function HomePage() {
    return (
        <div className='homePage'>
            <Header 
                title="Employee Directory"
            />
            <SearchBar />
            <EmployeeList />
        </div>
    );
}