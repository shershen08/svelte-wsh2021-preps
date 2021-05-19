<script>
    export let big = false;
    export let highlighted = false;
  </script>
  
  <style>
    .big {
      font-size: 2em;
    }
    
    .highlighted {
      border: solid currentColor 3px;
    }
  </style>    
      
  <button class:big class:highlighted>
    <slot/>
  </button>
  <Button big ghost>Click Me</Button>
