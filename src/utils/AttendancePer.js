export const AttendancePer = (totalDay,presentDay) => {
    console.log(totalDay,presentDay);
    return ((presentDay/totalDay) * 100).toFixed(2);
}