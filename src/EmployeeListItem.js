export default function EmployeeListItem({src, name, title}) {
    return (
        <div className="listItem">
            <img className="listItemAvatar" src={src} alt="An employee" />
            <div className="listItemTitle">
                <h2>{name}</h2>
                <h4>{title}</h4>
            </div>
        </div>
    );
}