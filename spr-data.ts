namespace sprites {

    /**
     * Sets a number in the data of a sprite
     */
    //% blockId=spriteDataSetNumber block="set $sprite=variables_get data $name to number $value"
    //% name.shadow="spriteDataNumberNameShadow"
    //% sprite.defl=mySprite
    //% group="Data"
    //% weight=10
    //% blockGap=8
    export function setDataNumber(sprite: Sprite, name: number, value: number) {
        if (!sprite || !name) return;
        const d = sprite.data;
        d[name] = value;
    }

    /**
     * Change a number in the data of a sprite by a given value
     */
    //% blockId=spriteDataChangeNumber block="change $sprite=variables_get data $name by number $value"
    //% name.shadow="spriteDataNumberNameShadow"
    //% sprite.defl=mySprite
    //% group="Data"
    //% weight=10
    //% blockGap=8
    export function changeDataNumberBy(sprite: Sprite, name: number, value: number) {
        if (!sprite || !name) return;
        const d = sprite.data;
        d[name] = (d[name] || 0) + value;
    }

    /**
     * Gets a number in the data of a sprite
     */
    //% blockId=spriteDataGetNumber block="$sprite=variables_get data $name as number"
    //% name.shadow="spriteDataNumberNameShadow"
    //% sprite.defl=mySprite
    //% group="Data"
    //% weight=10
    //% blockGap=8
    export function readDataNumber(sprite: Sprite, name: number): number {
        if (!sprite || !name) return 0;
        const d = sprite.data;
        return d[name] as number;
    }

    /**
     * Sets a number array in the data of a sprite
     */
    //% blockId=spriteDataSetNumberArray block="set $sprite=variables_get data $name to number array $value"
    //% name.shadow="spriteDataNumberArrayNameShadow"
    //% sprite.defl=mySprite
    //% group="Data array"
    //% weight=10
    //% blockGap=8
    export function setDataNumberArray(sprite: Sprite, name: number, value: number[]) {
        if (!sprite || !name) return;
        const d = sprite.data;
        d[name] = value;
    }

    /**
     * Gets a number array in the data of a sprite
     */
    //% blockId=spriteDataGetNumberArray block="$sprite=variables_get data $name as number array"
    //% name.shadow="spriteDataNumberArrayNameShadow"
    //% sprite.defl=mySprite
    //% group="Data array"
    //% weight=10
    //% blockGap=8
    export function readDataNumberArray(sprite: Sprite, name: number): number[] {
        if (!sprite || !name) return undefined;
        const d = sprite.data;
        return d[name] as number[];
    }

    /**
     * Sets a string in the data of a sprite
     */
    //% blockId=spriteDataSetString block="set $sprite=variables_get data $name to string $value"
    //% name.shadow="spriteDataStringNameShadow"
    //% sprite.defl=mySprite
    //% group="Data"
    //% weight=9
    //% blockGap=8
    export function setDataString(sprite: Sprite, name: number, value: string) {
        if (!sprite || !name) return;
        const d = sprite.data;
        d[name] = value;
    }

    /**
     * Gets a string in the data of a sprite
     */
    //% blockId=spriteDataGetString block="$sprite=variables_get data $name as string"
    //% name.shadow="spriteDataStringNameShadow"
    //% sprite.defl=mySprite
    //% group="Data"
    //% weight=9
    //% blockGap=8
    export function readDataString(sprite: Sprite, name: number): string {
        if (!sprite || !name) return "";
        const d = sprite.data;
        return d[name] as string;
    }

    /**
     * Sets a string array in the data of a sprite
     */
    //% blockId=spriteDataSetStringArray block="set $sprite=variables_get data $name to string array $value"
    //% name.shadow="spriteDataStringArrayNameShadow"
    //% sprite.defl=mySprite
    //% group="Data array"
    //% weight=9
    //% blockGap=8
    export function setDataStringArray(sprite: Sprite, name: number, value: string[]) {
        if (!sprite || !name) return;
        const d = sprite.data;
        d[name] = value;
    }

    /**
     * Gets a string array in the data of a sprite
     */
    //% blockId=spriteDataGetStringArray block="$sprite=variables_get data $name as string array"
    //% name.shadow="spriteDataStringArrayNameShadow"
    //% sprite.defl=mySprite
    //% group="Data array"
    //% weight=9
    //% blockGap=8
    export function readDataStringArray(sprite: Sprite, name: number): string[] {
        if (!sprite || !name) return undefined;
        const d = sprite.data;
        return d[name] as string[];
    }

    /**
     * Sets a boolean in the data of a sprite
     */
    //% blockId=spriteDataSetBoolean block="set $sprite=variables_get data $name to boolean $value"
    //% name.shadow="spriteDataBooleanNameShadow"
    //% sprite.defl=mySprite
    //% group="Data"
    //% weight=8
    //% blockGap=8
    export function setDataBoolean(sprite: Sprite, name: number, value: boolean) {
        if (!sprite || !name) return;
        const d = sprite.data;
        d[name] = !!value;
    }

    /**
     * Gets a boolean in the data of a sprite
     */
    //% blockId=spriteDataGetBoolean block="$sprite=variables_get data $name as boolean"
    //% name.shadow="spriteDataBooleanNameShadow"
    //% sprite.defl=mySprite
    //% group="Data"
    //% weight=8
    //% blockGap=8
    export function readDataBoolean(sprite: Sprite, name: number): boolean {
        if (!sprite || !name) return false;
        const d = sprite.data;
        return !!d[name];
    }


    /**
     * Sets a boolean array in the data of a sprite
     */
    //% blockId=spriteDataSetBooleanArray block="set $sprite=variables_get data $name to boolean array $value"
    //% name.shadow="spriteDataBooleanArrayNameShadow"
    //% sprite.defl=mySprite
    //% group="Data array"
    //% weight=8
    //% blockGap=8
    export function setDataBooleanArray(sprite: Sprite, name: number, value: boolean[]) {
        if (!sprite || !name) return;
        const d = sprite.data;
        d[name] = value;
    }

    /**
     * Gets a boolean array in the data of a sprite
     */
    //% blockId=spriteDataGetBooleanArray block="$sprite=variables_get data $name as boolean array"
    //% name.shadow="spriteDataBooleanArrayNameShadow"
    //% sprite.defl=mySprite
    //% group="Data array"
    //% weight=8
    //% blockGap=8
    export function readDataBooleanArray(sprite: Sprite, name: number): boolean[] {
        if (!sprite || !name) return undefined;
        const d = sprite.data;
        return d[name] as boolean[];
    }

    /**
     * Sets a sprite in the data of a sprite
     */
    //% blockId=spriteDataSetSprite block="set $sprite=variables_get data $name to sprite $value"
    //% name.shadow="spriteDataSpriteNameShadow"
    //% sprite.defl=mySprite
    //% group="Data"
    //% weight=7
    //% blockGap=8
    export function setDataSprite(sprite: Sprite, name: number, value: Sprite) {
        if (!sprite || !name) return;
        const d = sprite.data;
        d[name] = value;
    }

    /**
     * Gets a sprite in the data of a sprite
     */
    //% blockId=spriteDataGetSprite block="$sprite=variables_get data $name as sprite"
    //% name.shadow="spriteDataSpriteNameShadow"
    //% sprite.defl=mySprite
    //% group="Data"
    //% weight=7
    //% blockGap=8
    export function readDataSprite(sprite: Sprite, name: number): Sprite {
        if (!sprite || !name) return undefined;
        const d = sprite.data;
        return d[name] as Sprite;
    }

    /**
     * Sets a sprite array in the data of a sprite
     */
    //% blockId=spriteDataSetSpriteArray block="set $sprite=variables_get data $name to sprite array $value"
    //% value.shadow="lists_create_with"
    //% name.shadow="spriteDataSpriteNameShadow"
    //% sprite.defl=mySprite
    //% group="Data array"
    //% weight=7
    //% blockGap=8
    export function setDataSpriteArray(sprite: Sprite, name: number, value: Sprite[]) {
        if (!sprite || !name) return;
        const d = sprite.data;
        d[name] = value;
    }

    /**
     * Gets a sprite array in the data of a sprite
     */
    //% blockId=spriteDataGetSpriteArray block="$sprite=variables_get data $name as sprite array"
    //% name.shadow="spriteDataSpriteArrayNameShadow"
    //% sprite.defl=mySprite
    //% group="Data array"
    //% weight=7
    //% blockGap=8
    export function readDataSpriteArray(sprite: Sprite, name: number): Sprite[] {
        if (!sprite || !name) return undefined;
        const d = sprite.data;
        return d[name] as Sprite[];
    }

    /**
     * Sets an Image in the data of a sprite.
     * Deprecated. Use setDataImageValue instead
     */
    //% blockId=spriteDataSetImage block="set $sprite=variables_get data $name to image $value"
    //% name.shadow="spriteDataImageNameShadow"
    //% sprite.defl=mySprite
    //% group="Data"
    //% deprecated=1
    //% weight=6
    //% blockGap=8
    export function setDataImage(sprite: Sprite, name: number, value: Image) {
        setDataImageValue(sprite, name, value);
    }

    /**
     * Sets an Image in the data of a sprite
     */
    //% blockId=spriteDataSetImageValue block="set $sprite data $name to image $value"
    //% name.shadow="spriteDataImageNameShadow"
    //% sprite.shadow=variables_get
    //% sprite.defl=mySprite
    //% group="Data"
    //% value.shadow=screen_image_picker
    //% weight=6
    //% blockGap=8
    export function setDataImageValue(sprite: Sprite, name: number, value: Image) {
        if (!sprite || !name) return;
        const d = sprite.data;
        d[name] = value;
    }

    /**
     * Gets a sprite in the data of a sprite
     */
    //% blockId=spriteDataGetImage block="$sprite=variables_get data $name as image"
    //% name.shadow="spriteDataImageNameShadow"
    //% sprite.defl=mySprite
    //% group="Data"
    //% weight=6
    //% blockGap=8
    export function readDataImage(sprite: Sprite, name: number): Image {
        if (!sprite || !name) return undefined;
        const d = sprite.data;
        return d[name] as Image;
    }

    /**
     * Sets an Image array in the data of a sprite.
     * Deprecated. Use setDataImageValue instead
     */
    //% blockId=spriteDataSetImageArray block="set $sprite=variables_get data $name to image array $value"
    //% value.shadow="lists_create_with" value.defl=screen_image_picker
    //% name.shadow="spriteDataImageArrayNameShadow"
    //% sprite.defl=mySprite
    //% group="Data array"
    //% deprecated=1
    //% weight=6
    //% blockGap=8
    export function setDataImageArray(sprite: Sprite, name: number, value: Image[]) {
        setDataImageValueArray(sprite, name, value);
    }

    /**
     * Sets an Image array in the data of a sprite
     */
    //% blockId=spriteDataSetImageValueArray block="set $sprite data $name to image array $value"
    //% value.shadow="lists_create_with" value.defl=screen_image_picker
    //% sprite.shadow=variables_get
    //% sprite.defl=mySprite
    //% name.shadow="spriteDataImageArrayNameShadow"
    //% group="Data array"
    //% weight=6
    //% blockGap=8
    export function setDataImageValueArray(sprite: Sprite, name: number, value: Image[]) {
        if (!sprite || !name) return;
        const d = sprite.data;
        d[name] = value;
    }

    /**
     * Gets a Image array in the data of a sprite
     */
    //% blockId=spriteDataGetImageArray block="$sprite=variables_get data $name as image array"
    //% name.shadow="spriteDataImageArrayNameShadow"
    //% sprite.defl=mySprite
    //% group="Data array"
    //% weight=6
    //% blockGap=8
    export function readDataImageArray(sprite: Sprite, name: number): Image[] {
        if (!sprite || !name) return undefined;
        const d = sprite.data;
        return d[name] as Image[];
    }

    /**
     * Sets a location in the data of a sprite
     */
    //% blockId=spriteDataSetLocation block="set $sprite=variables_get data $name to location $value"
    //% name.shadow="spriteDataLocationNameShadow"
    //% value.shadow=mapgettile
    //% sprite.defl=mySprite
    //% group="Data"
    //% weight=5
    //% blockGap=8
    export function setDataLocation(sprite: Sprite, name: number, value: tiles.Location) {
        if (!sprite || !name) return;
        const d = sprite.data;
        d[name] = value;
    }

    /**
     * Gets a location in the data of a sprite
     */
    //% blockId=spriteDataGetLocation block="$sprite=variables_get data $name as location"
    //% name.shadow="spriteDataLocationNameShadow"
    //% sprite.defl=mySprite
    //% group="Data"
    //% weight=5
    //% blockGap=8
    export function readDataLocation(sprite: Sprite, name: number): tiles.Location {
        if (!sprite || !name) return undefined;
        const d = sprite.data;
        return d[name] as tiles.Location;
    }

    /**
     * Sets a location array in the data of a sprite
     */
    //% blockId=spriteDataSetLocationArray block="set $sprite=variables_get data $name to location array $value"
    //% name.shadow="spriteDataLocationArrayNameShadow"
    //% value.shadow="lists_create_with" value.defl=mapgettile
    //% sprite.defl=mySprite
    //% group="Data array"
    //% weight=8
    //% blockGap=8
    export function setDataLocationArray(sprite: Sprite, name: number, value: tiles.Location[]) {
        if (!sprite || !name) return;
        const d = sprite.data;
        d[name] = value;
    }

    /**
     * Gets a location array in the data of a sprite
     */
    //% blockId=spriteDataGetLocationArray block="$sprite=variables_get data $name as location array"
    //% name.shadow="spriteDataLocationArrayNameShadow"
    //% sprite.defl=mySprite
    //% group="Data array"
    //% weight=8
    //% blockGap=8
    export function readDataLocationArray(sprite: Sprite, name: number): tiles.Location[] {
        if (!sprite || !name) return undefined;
        const d = sprite.data;
        return d[name] as tiles.Location[];
    }

}
