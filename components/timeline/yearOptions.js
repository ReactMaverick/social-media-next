export default function YearOptions() {

    const years = Array.from({ length: 2011 - 1950 }, (_, index) => 1950 + index);

    const options = years.map(year => <option key={year} value={year}>{year}</option>);

    return (
        <>
            {options}
        </>
    )
}