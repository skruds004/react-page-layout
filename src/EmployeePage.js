import Header from './Header';

export default function EmployeePage() {
    return (
        <div className='employeePage'>
            <Header 
                title = 'Employee'
            />
            <div className='bigEmployee'>
                <img className='bigAvatar' src="https://corvusjanitorial.com/wp-content/uploads/2021/01/Janitor.jpg" alt="Bigger picture" />
                <div className='bigTitle'>
                    <h1>Bill</h1>
                    <h3>Better Janitor</h3>
                </div>
            </div>
        </div>
    );
}