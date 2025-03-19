export default function Weekdays() {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    const todayIndex = new Date().getDay(); 

    // Reorder the array to start from today
    const orderedWeekdays = [...weekdays.slice(todayIndex), ...weekdays.slice(0, todayIndex)];

    return (
        <ul>
            {orderedWeekdays.map((day, index) => (
                <li key={index}>{day}</li>
            ))}
        </ul>
    );
}
