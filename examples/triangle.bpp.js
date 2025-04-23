function main(){const buffer=Array(64*64);
for(let i=0;
i<64;
++i){for(let j=0;
j<64;
++j){buffer[i+(64-j)*64]=(0===(j&i))?"#":" ";
}}console.log(buffer.join(""));
}main();
