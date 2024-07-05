import * as dvb from "dvbjs";

if (process.argv.length <= 2) {
    console.error("Missing Argument: Stop name");
    process.exit(1);
}

dvb.findStop(process.argv[2]).then(data => {
    console.log(data)
});
