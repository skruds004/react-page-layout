import EmployeeListItem from "./EmployeeListItem";

export default function EmployeeList() {
    return (
        <div>
            <EmployeeListItem 
                name="Bob"
                title="Janitor"
                src="https://corvusjanitorial.com/wp-content/uploads/2021/01/Janitor.jpg"
            />
            <EmployeeListItem 
                name="Bill"
                title="Better Janitor"
                src="https://corvusjanitorial.com/wp-content/uploads/2021/01/Janitor.jpg"
            />
            <EmployeeListItem 
                name="Ben"
                title="Best Janitor"
                src="https://corvusjanitorial.com/wp-content/uploads/2021/01/Janitor.jpg"
            />
            <EmployeeListItem 
                name="Brett"
                title="Worst Janitor"
                src="https://corvusjanitorial.com/wp-content/uploads/2021/01/Janitor.jpg"
            />
            <EmployeeListItem 
                name="Boris"
                title="Another Janitor"
                src="https://corvusjanitorial.com/wp-content/uploads/2021/01/Janitor.jpg"
            />
        </div>
    );
}