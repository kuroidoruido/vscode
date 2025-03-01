/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

declare module 'vscode' {
	/**
	 * The namespace for localization-related functionality in the extension API. To use this properly,
	 * you must have `l10n` defined in your `package.json` and have bundle.l10n.<language>.json files.
	 * For more information on how to generate bundle.l10n.<language>.json files, check out the
	 * [vscode-l10n repo](https://github.com/microsoft/vscode-l10n).
	 */
	export namespace l10n {
		/**
		 * Marks a string for localization. If a localized bundle is available for the language specified by
		 * {@link env.language} and the bundle has a localized value for this message, then that localized
		 * value will be returned (with injected {@link args} values for any templated values).
		 * @param message The message to localize. Supports index templating where strings like {0} and {1} are
		 * replaced by the item at that index in the {@link args} array.
		 * @param args The arguments to be used in the localized string. The index of the argument is used to
		 * match the template placeholder in the localized string.
		 * @returns localized string with injected arguments.
		 */
		export function t(message: string, ...args: any[]): string;
		/**
		 * Marks a string for localization. If a localized bundle is available for the language specified by
		 * {@link env.language} and the bundle has a localized value for this message, then that localized
		 * value will be returned (with injected args values for any templated values).
		 * @param options The options to use when localizing the message.
		 * @returns localized string with injected arguments.
		 */
		export function t(options: {
			/**
			 * The message to localize. Supports index templating where strings like {0} and {1} are
			 * replaced by the item at that index in the {@link args} array.
			 */
			message: string;
			/**
			 * The arguments to be used in the localized string. The index of the argument is used to
			 * match the template placeholder in the localized string.
			 */
			args?: any[];
			/**
			 * A comment to help translators understand the context of the message.
			 */
			comment: string[];
		}): string;
		/**
		 * The bundle of localized strings that have been loaded for the extension.
		 * It's undefined if no bundle has been loaded. The bundle is typically not loaded if
		 * there was no bundle found or when we are running with the default language.
		 */
		export const bundle: { [key: string]: string } | undefined;
		/**
		 * The URI of the localization bundle that has been loaded for the extension.
		 * It's undefined if no bundle has been loaded. The bundle is typically not loaded if
		 * there was no bundle found or when we are running with the default language.
		 */
		export const uri: Uri | undefined;
	}
}
