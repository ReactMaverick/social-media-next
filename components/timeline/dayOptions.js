export default function DayOptions() {
    const days = Array.from({ length: 32 - 1 }, (_, index) => 1 + index);

    const options = days.map(day => <option key={day} value={day}>{day}</option>);

    return (
        <>
            {options}
        </>
    )
}