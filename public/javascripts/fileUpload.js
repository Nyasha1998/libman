FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode,
)

FilePond.setOptions({
    stylePanelAspectRation: 150 / 100
    imageResizeTargetWidth: 100,
    imageResizeTargetHeight: 150
})

Filepond.parse(document.body);
