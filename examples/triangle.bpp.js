function main() {const buffer  = Array(50*50+50);
for(let i  = 0;
i<50;
++i){for(let j  = 0;
j<50;
++j){buffer[i+(50-1-j)*(50+1)]=(0===(j&i))?"#":" ";
}buffer[i*(50+1)+50]="\n";
}console.log(buffer.join(""));
}main();
