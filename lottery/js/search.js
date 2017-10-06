function rangeSearch(syear, smonth, fyear, fmonth, data, mode, len)
{
    if (mode == "all") {
        // check if find the first data or not
        var flag = 0;

        // to save each number appear times & initaillize
        var numarr = [];
        for (var i = 0; i < 50; i++)
        { numarr.push(0); }

        // scan data
        for (var i = 0; i < len; i++) {

            

            // if the time is match
            if ((data[i].time.substring(0, 4) == fyear && data[i].time.substring(5, 7) == fmonth) || flag == 1) {
               
                // if find the first matching data, only need to find next 8 data
                if (flag == 0) { flag = 1; /*len = i + 8;*/ }
                
                if ((data[i].time.substring(0, 4) == syear && Number(data[i].time.substring(5, 7)) == Number(smonth) - 1 && Number(smonth) - 1 > 0) ||
                    (Number(data[i].time.substring(0, 4)) == Number(syear) - 1 && data[i].time.substring(5, 7) == "12" && Number(smonth) - 1 <= 0))
                    break;

                // count appear times
                for (var j = 0; j < 6 && flag == 1 ; j++) {
                    numarr[data[i].number[j]-1] = numarr[data[i].number[j]-1] + 1;
                }
           }
        }
        //for (var i = 0; i < 49; i++)
        //    console.log("number" + (i) + ": " + numarr[i]);

    }

    else if (mode == "sp") {
        // check if find the first data or not
        var flag = 0;

        // to save each number appear times & initaillize
        var numarr = [];
        for (var i = 0; i < 50; i++)
        { numarr.push(0); }

        // scan data
        for (var i = 0; i < len; i++) {
            // if the time is match
            if ((data[i].time.substring(0, 4) == fyear && data[i].time.substring(5, 7) == fmonth) || flag == 1) {

                // if find the first matching data, only need to find next 8 data
                if (flag == 0) { flag = 1; /*len = i + 8;*/ }

                if ((data[i].time.substring(0, 4) == syear && Number(data[i].time.substring(5, 7)) == Number(smonth) - 1 && Number(smonth) - 1 > 0) ||
                    (Number(data[i].time.substring(0, 4)) == Number(syear) - 1 && data[i].time.substring(5, 7) == "12" && Number(smonth) - 1 <= 0))
                    break;

                // count appear times
                numarr[data[i].spnum-1] = numarr[data[i].spnum-1] + 1;
            }
        }
        //for (var i = 0; i < 49; i++)
        //    console.log("number" + (i + 1) + ": " + numarr[i + 1]);
    }

    else {

        // check if find the first data or not
        var flag = 0;


        var target = Number(mode);

        // to save each number appear times & initaillize
        var numarr2d = [];
        for (i = 0 ; i < 50 ; i++) {
            numarr2d[i] = [];
        }
        for (var i = 0; i < 50; i++)
            for (var j = 0; j < 50; j++)
                numarr2d[i][j] = 0;

        // scan data
        for (var i = 0; i < len; i++) {
            // if the time is match
            if ((data[i].time.substring(0, 4) == fyear && data[i].time.substring(5, 7) == fmonth) || flag == 1) {

                // if find the first matching data, only need to find next 8 data
                if (flag == 0) { flag = 1; /*len = i + 8;*/ }

                if ((data[i].time.substring(0, 4) == syear && Number(data[i].time.substring(5, 7)) == Number(smonth) - 1 && Number(smonth) - 1 > 0) ||
                    (Number(data[i].time.substring(0, 4)) == Number(syear) - 1 && data[i].time.substring(5, 7) == "12" && Number(smonth) - 1 <= 0))
                    break;


                var tmparr = [];
                for (var k = 0; k < 6; k++) {
                    tmparr[k] = data[i].number[k];
                }



                for (var ip = 0; ip < 6; ip++) {
                    for (var p = 0; p < 6; p++) {
                        if (ip != p) {
                            numarr2d[tmparr[ip]][tmparr[p]] = numarr2d[tmparr[ip]][tmparr[p]] + 1;
                        }
                    }
                }


            }
        }
        //for (var i = 0; i < 49; i++)
        //    console.log("number" + (i + 1) + ": " + numarr2d[target][i + 1]);

        var numarr = [];
        for (var i = 0; i < 49 ; i++)
            numarr.push(numarr2d[target][i + 1]);
    }




    return numarr;
}

function search(year, month, data, mode, len) {
    //console.log(data[0].time);

    if (mode == "all") {
        // check if find the first data or not
        var flag = 0;

        // to save each number appear times & initaillize
        var numarr = [];
        for (var i = 0; i < 50; i++)
        { numarr.push(0); }

        // scan data
        for (var i = 0; i < len; i++) {
            // if the time is match
            if (data[i].time.substring(0, 4) == year && data[i].time.substring(5, 7) == month) {

                // if find the first matching data, only need to find next 8 data
                if (flag == 0) { flag = 1; len = i + 8; }

                // count appear times
                for (var j = 0; j < 6; j++) {
                    numarr[data[i].number[j]] = numarr[data[i].number[j]] + 1;
                }
            }
        }
        //for (var i = 0; i < 49; i++)
        //    console.log("number" + (i + 1) + ": " + numarr[i + 1]);

    }

    else if (mode == "sp") {
            // check if find the first data or not
            var flag = 0;

            // to save each number appear times & initaillize
            var numarr = [];
            for (var i = 0; i < 50; i++)
            { numarr.push(0); }

            // scan data
            for (var i = 0; i < len; i++) {
                // if the time is match
                if (data[i].time.substring(0, 4) == year && data[i].time.substring(5, 7) == month) {

                    // if find the first matching data, only need to find next 8 data
                    if (flag == 0) { flag = 1; len = i + 8; }

                    // count appear times
                    numarr[data[i].spnum] = numarr[data[i].spnum] + 1;
                }
            }
            //for (var i = 0; i < 49; i++)
            //    console.log("number" + (i + 1) + ": " + numarr[i + 1]);
        }

    else {

            // check if find the first data or not
            var flag = 0;
            

            var target = Number(mode);

            // to save each number appear times & initaillize
            var numarr2d = [];
            for (i = 0 ; i < 50 ; i++) {
                numarr2d[i] = [];
            }
            for (var i = 0; i < 50; i++)
                for (var j = 0; j < 50; j++)
                    numarr2d[i][j] = 0;

            // scan data
            for (var i = 0; i < len; i++) {
                // if the time is match
                if (data[i].time.substring(0, 4) == year && data[i].time.substring(5, 7) == month) {

                    // if find the first matching data, only need to find next 8 data
                    if (flag == 0) { flag = 1; len = i + 8; }


                    var tmparr = new Array(6);
                    for (var k = 0; k < 6; k++)
                    {
                        tmparr[k] = data[i].number[k];
                    }
                        


                    for (var ip = 0; ip < 6; ip++)
                    {
                        for (var p = 0; p < 6; p++)
                        {
                            if (ip != p)
                            {
                                numarr2d[tmparr[ip]][tmparr[p]] = numarr2d[tmparr[ip]][tmparr[p]] + 1;
                            }
                        }
                    }


                }
            }
            //for (var i = 0; i < 49; i++)
            //    console.log("number" + (i + 1) + ": " + numarr2d[target][i + 1]);
            
            var numarr = [];
            for (var i = 0; i < 49 ; i++)
                numarr.push(numarr2d[target][i + 1]);
    }


    return numarr;

}