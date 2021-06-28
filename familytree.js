class familytree {
    constructor(name, parents) {
        this.name = name;
        this.parents = parents;
    }

    childOf() {
        return this.parents.join(" & ");
    }
}

const child1 = new familytree("Aden", [["kifle Abiye"], ["Asni Balher"]]);
const child2 = new familytree("Melat",[["kifle Abiye"], ["Asni Balher"]]);
const child3 = new familytree("Babi", [["kifle Abiye"], ["Asni Balher"]]);


let familyTree = [child1,child2,child3];

familyTree.forEach(familytree => 
    console.log(familytree.name + " is a child of " + familytree.childOf()))
