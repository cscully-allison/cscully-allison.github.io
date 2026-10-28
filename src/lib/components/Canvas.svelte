<script lang="ts">

    import { onMount } from 'svelte';
    let windowHeight: number;
    
    onMount(() => {  
       windowHeight = window.innerHeight-75;
    });

    type Point = { x: number; y: number };

    let points: Point[] = [];
    let isDrawing = false;
    let undoStack: Point[][] = [];
    let redoStack: Point[][] = [];
    let stack_buffer: Point[] = [];

    function startDrawing(event: MouseEvent) {
        stack_buffer = [];
        isDrawing = true;
        const { offsetX, offsetY } = event;
        points = [...points, { x: offsetX, y: offsetY }]; // Trigger reactivity
        stack_buffer.push({ x: offsetX, y: offsetY });
        redoStack = []; // Clear redo stack on new drawing
    }

    function draw(event: MouseEvent) {
        if (!isDrawing) return;
        const { offsetX, offsetY } = event;
        points = [...points, { x: offsetX, y: offsetY }]; // Trigger reactivity
        stack_buffer.push({ x: offsetX, y: offsetY });
    }
    
    function leaveDrawing(event: MouseEvent) {
        if (!isDrawing){
            return;
        }
        
        stopDrawing();
    }

    function stopDrawing() {
        undoStack.push(stack_buffer);
        isDrawing = false;
        console.log('Points drawn:', undoStack);
    }
    
    function manageInput(event: KeyboardEvent) {
        if (event.key === 'z' && (event.ctrlKey || event.metaKey)) {
            const lastAction = undoStack.pop() ?? null;
            if (lastAction) {
                points = points.slice(0, points.length - lastAction.length);
                redoStack.push(lastAction);
            }
        }
        if (
        (event.key === 'y' && (event.ctrlKey || event.metaKey)) ||
        (event.key === 'z' && (event.ctrlKey || event.metaKey) && event.shiftKey)
        ) {
            const redoAction = redoStack.pop() ?? null;
            if (redoAction) {
                points = [...points, ...redoAction];
                undoStack.push(redoAction);
            }
        }
    }
</script>

<!-- svelte-ignore a11y_no_noninteractive_tabindex a11y_no_noninteractive_element_interactions -->
<svg
    on:mousedown={startDrawing}
    on:mousemove={draw}
    on:mouseup={stopDrawing}
    on:mouseleave={leaveDrawing}
    on:keydown={manageInput}
    role="application"
    aria-label="Freehand drawing canvas"
    width="600"
    height={windowHeight}
    class="drawing-canvas"
    tabindex="0"
>
    <text class="tooltip" x="10" y="20" font-size="16" fill="gray">Doodle in the margins!</text>
    <text class="tooltip" x="10" y="40" font-size="16" fill="gray">Point and Click to Draw</text>
    <text class="tooltip" x="10" y="60" font-size="16" fill="gray">Ctrl+Z to undo</text>
    <text class="tooltip" x="10" y="80" font-size="16" fill="gray">Ctrl+Y to redo</text>
    {#if points.length > 0}
        <path
            d={`M ${points[0].x} ${points[0].y} ${points.slice(1).map((p) => `L ${p.x} ${p.y}`).join(' ')}`}
            stroke="black"
            fill="none"
            stroke-width="2"
        />
    {/if}
</svg>

<style>
    .drawing-canvas {
        touch-action: none; /* Prevent touch scrolling while drawing */
        background-color: white;
        float: left;
    }

    .tooltip {
        user-select: none;
        pointer-events: none;
    }
</style>