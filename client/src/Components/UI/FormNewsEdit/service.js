export function createFormData(form, type) {
	const formData = new FormData();
	formData.append('type', type);
	formData.append('newsId', form.newsId);
	formData.append('files', form.source);
	formData.append('title', form.title);
	formData.append('textBody', form.textBody);

	return formData;
}
