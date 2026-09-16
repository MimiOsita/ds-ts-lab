import { friends } from "./01-basics";
import {
    ColleagueV2,
    Friend,
    Buddy,
    BuddyList,
    Administrator,
} from "./myTypes";

const colleague1: ColleagueV2 = {
    name: "Ralph Graham",
    department: "Engineering",
    contact: {
        email: "rgraham@comapny.com",
        extension: 121,
    },
};

const colleague2: ColleagueV2 = {
    name: "Patti Burke",
    department: "Finance",
    contact: {
        email: "pburke@comapny.com",
        extension: 132,
    },
};

function makeBuddyList(
    name: string,
    buddies: Buddy[],
    admin?: Administrator
): BuddyList {
    return {
        name,
        members: buddies,
        administrator: admin,
    } as BuddyList;
}

const myFootballBuddies = makeBuddyList(
    "Football team",
    [colleague1, friends[0], colleague2],
    colleague1
)

const myBandBuddies = makeBuddyList(
    "Band name",
    [colleague1, friends[1]]
)

console.log(myFootballBuddies)
console.log(myBandBuddies)

function findBuddyContact(list: BuddyList, name: string): string | undefined {
    for (const buddy of list.members) {
        if (buddy.name === name) {
            if ("phone" in buddy) {
                return buddy.phone;
            }
            else {
                return buddy.contact.email;
            }
        }
        return undefined;
    }
}

console.log("Contact buddy at: ", findBuddyContact(myFootballBuddies, "Ralph Graham"));


function getBuddyListFriends(
    list: BuddyList
): Friend[] {
    const result = list.members.reduce<Friend[]>((friendsArray, buddy) => {
        if ("phone" in buddy) {
            friendsArray.push(buddy)
        }
        return friendsArray;
    }, []);
    return result;
}