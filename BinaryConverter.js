module.exports = {
 convert: function( s ) {
   var result = '';
   var i;

   for( i = 0; i < s.length; i++) {
     var ascii = Number(s.charCodeAt( i ));
     
     var binary = '';
     while( ascii > 0 ) {
       binary += ( ascii % 2 ) ? '1' : '0';
       ascii = Math.floor( ascii / 2 );
     }

     binary = binary.split("").reduce((rev, char) => char + rev, '');
     result += binary;
   }
   return result;
 }
};
