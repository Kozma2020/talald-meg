
function GenerateCards(order) {
    if (order !== 5 && order !== 7 && order !== 3) {
        console.error("Csak 3-as, 5-ös vagy 7-es szint engedélyezett!");
        return;
    }

    let pakli = [];
    let elso = [];

    for (let i = 0; i <= order; i++) {
        elso.push(i);
    }

    pakli.push(elso);

    let kov = order + 1;

    for(let j = 0; j < order; j++) {
        let uj = [0]
        for (let k = 0; k < order; k++) {
            uj.push(kov);
            kov++;
        }
    pakli.push(uj);
    }
    console.log(pakli);
}

GenerateCards(3);