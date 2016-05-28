import program from "commander";

export default function( pkg ) {
  program
    .version( pkg.version )
    .arguments( "<file>" )
    .option( "-p, --pretty", "Pretty print the response" )
    .action( ( file, options ) => {
      console.log( `input: ${file}, pretty: ${options.pretty}` );
    } )
    .parse( process.argv );
}
