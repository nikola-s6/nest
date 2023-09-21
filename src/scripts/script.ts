async function main() {
  console.log('Script has been run!');
}

main().catch((error) => {
  console.log(error);
  process.exitCode = 1;
});

// npx ts-node src/scripts/script.ts
