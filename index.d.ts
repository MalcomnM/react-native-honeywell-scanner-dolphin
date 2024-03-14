declare namespace HoneywellScanner {
    const isCompatible: boolean;
    function on(eventName: string, handler: (event: { data: string } | string | null) => void): void;
    function off(eventName: string, handler: () => void): void;
    function startReader(): Promise<boolean>;
    function stopReader(): Promise<void>;
    function onBarcodeReadSuccess(event:object): void;
    function onBarcodeReadFail(event:object): void;
    function offBarcodeReadSuccess(): void;
    function offBarcodeReadFail(): void;
}

export default HoneywellScanner;
